import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './TimedCards.module.css';

export default function TimedCards({ items = [], showNav = false, showPagination = true }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentDetails, setCurrentDetails] = useState(items[0]);

    const cardRefs = useRef([]);
    const cardContentRefs = useRef([]);
    const slideItemRefs = useRef([]);
    const detailsEvenRef = useRef(null);
    const detailsOddRef = useRef(null);
    const paginationRef = useRef(null);
    const navRef = useRef(null);
    const indicatorRef = useRef(null);
    const coverRef = useRef(null);
    const progressSubForegroundRef = useRef(null);
    const activeOverlayRef = useRef(null);
    const stepRef = useRef(null);
    const loopRef = useRef(null);

    // Refs to manage animation state without causing re-renders
    const order = useRef(items.map((_, i) => i));
    const detailsEven = useRef(true);
    const isAnimating = useRef(false);
    const timeoutId = useRef(null);


    useEffect(() => {
        const loadImage = (src) => new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });

        const loadImages = async () => {
            try {
                if (!items || items.length === 0) return setIsLoaded(true);
                await Promise.all(items.map(({ image }) => loadImage(image)));
                setIsLoaded(true);
            } catch (error) {
                console.error("One or more images failed to load", error);
            }
        };

        loadImages();

        // Cleanup function
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
            gsap.globalTimeline.clear();
        };
    }, [items]);

    // Reset order and current item when items change
    useEffect(() => {
        order.current = items.map((_, i) => i);
        if (items && items.length > 0) {
            setCurrentDetails(items[0]);
        }
    }, [items]);

    useEffect(() => {
        if (!isLoaded) return;
        if (!items || items.length === 0) return;

        const cardWidth = 200;
        const cardHeight = 300;
        const gap = 40;
        const numberSize = 50;
        const ease = "sine.inOut";

        let offsetTop = window.innerHeight - 430;
        let offsetLeft = window.innerWidth - 830;

        const init = () => {
            const [active, ...rest] = order.current;
            const detailsActive = detailsEven.current ? detailsEvenRef.current : detailsOddRef.current;
            const detailsInactive = detailsEven.current ? detailsOddRef.current : detailsEvenRef.current;

            gsap.set(paginationRef.current, { top: offsetTop + 330, left: offsetLeft, y: 200, opacity: 0, zIndex: 60 });
            gsap.set(navRef.current, { y: -200, opacity: 0 });

            gsap.set(cardRefs.current[active], { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
            gsap.set(cardContentRefs.current[active], { x: 0, y: 0, opacity: 0 });
            gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
            gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
            if (activeOverlayRef.current) {
                gsap.set(activeOverlayRef.current, { opacity: 0 });
            }

            ['.text', '.title-1', '.title-2'].forEach(sel => gsap.set(detailsInactive.querySelectorAll(sel), { y: 100 }));
            gsap.set(detailsInactive.querySelector('.desc'), { y: 50 });
            gsap.set(detailsInactive.querySelector('.cta'), { y: 60 });
            
            if (progressSubForegroundRef.current) {
                gsap.set(progressSubForegroundRef.current, { width: `${(100 / order.current.length) * (active + 1)}%` });
            }

            rest.forEach((i, index) => {
                gsap.set(cardRefs.current[i], { x: offsetLeft + 400 + index * (cardWidth + gap), y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10 });
                gsap.set(cardContentRefs.current[i], { x: offsetLeft + 400 + index * (cardWidth + gap), zIndex: 40, y: offsetTop + cardHeight - 100 });
                gsap.set(slideItemRefs.current[i], { x: (index + 1) * numberSize });
            });

            if (indicatorRef.current) {
                gsap.set(indicatorRef.current, { x: -window.innerWidth });
            }

            const startDelay = 0.6;
            gsap.to(coverRef.current, { x: window.innerWidth + 400, delay: 0.5, ease, onComplete: () => {
                timeoutId.current = setTimeout(loop, 500);
            }});

            rest.forEach((i, index) => {
                gsap.to(cardRefs.current[i], { x: offsetLeft + index * (cardWidth + gap), zIndex: 30, delay: 0.05 * index, ease, duration: 1, stagger: 0.1, delay: startDelay });
                gsap.to(cardContentRefs.current[i], { x: offsetLeft + index * (cardWidth + gap), zIndex: 40, delay: 0.05 * index, ease, duration: 1, stagger: 0.1, delay: startDelay });
            });
            if (paginationRef.current && showPagination) {
                gsap.to(paginationRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
            }
            if (navRef.current && showNav) {
                gsap.to(navRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
            }
            gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
            if (activeOverlayRef.current) {
                gsap.to(activeOverlayRef.current, { opacity: 1, ease, delay: startDelay });
            }
        };
        
        const step = (direction = 1) => {
            if (isAnimating.current) return;
            isAnimating.current = true;
            
            if (direction === 1) {
                order.current.push(order.current.shift());
            } else {
                order.current.unshift(order.current.pop());
            }
            detailsEven.current = !detailsEven.current;
            setCurrentDetails(items[order.current[0]]);

            const [active, ...rest] = order.current;
            const prv = rest[rest.length - 1];

            const detailsActive = detailsEven.current ? detailsEvenRef.current : detailsOddRef.current;
            const detailsInactive = detailsEven.current ? detailsOddRef.current : detailsEvenRef.current;

            gsap.timeline({ onComplete: () => isAnimating.current = false })
                .set(detailsActive, { zIndex: 22 })
                .to(detailsActive, { opacity: 1, delay: 0.4, ease })
                .to(detailsActive.querySelectorAll('.text, .title-1, .title-2'), { y: 0, duration: 0.7, ease, stagger: 0.1 }, 0.1)
                .to(detailsActive.querySelector('.desc'), { y: 0, duration: 0.4, ease }, 0.3)
                .to(detailsActive.querySelector('.cta'), { y: 0, duration: 0.4, ease }, 0.35)
                .set(detailsInactive, { zIndex: 12 })
                .set(cardRefs.current[prv], { zIndex: 10 })
                .set(cardRefs.current[active], { zIndex: 20 })
                .to(cardRefs.current[prv], { scale: 1.5, ease }, 0)
                .to(cardContentRefs.current[active], { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease }, 0)
                .to(slideItemRefs.current[active], { x: 0, ease }, 0)
                .to(slideItemRefs.current[prv], { x: -numberSize, ease }, 0)
                .to(progressSubForegroundRef.current, { width: `${(100 / order.current.length) * (active + 1)}%`, ease }, 0)
                .to(cardRefs.current[active], {
                    x: 0, y: 0, ease, width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
                    onComplete: () => {
                        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                        gsap.set(cardRefs.current[prv], { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1, opacity: 1 });
                        gsap.set(cardContentRefs.current[prv], { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 });
                        gsap.set(slideItemRefs.current[prv], { x: rest.length * numberSize });
                        gsap.set(detailsInactive, { opacity: 0 });
                        gsap.set(detailsInactive.querySelectorAll('.text, .title-1, .title-2'), { y: 100 });
                        gsap.set(detailsInactive.querySelector('.desc'), { y: 50 });
                        gsap.set(detailsInactive.querySelector('.cta'), { y: 60 });
                        if (activeOverlayRef.current) {
                            // Keep overlay on; it fades in at init and stays while active card is full-screen
                        }
                    }
                }, 0)
                .to(rest.filter(i => i !== prv).map(i => cardRefs.current[i]), {
                    x: (i, target) => {
                       const originalIndex = order.current.indexOf(parseInt(target.id.replace('card','')));
                       return offsetLeft + (originalIndex -1) * (cardWidth + gap);
                    },
                    ease,
                    delay: 0.1,
                    stagger: 0.1,
                }, 0)
                 .to(rest.filter(i => i !== prv).map(i => cardContentRefs.current[i]), {
                    x: (i, target) => {
                        const originalIndex = order.current.indexOf(parseInt(target.id.replace('card-content-','')));
                        return offsetLeft + (originalIndex - 1) * (cardWidth + gap);
                    },
                     ease,
                     delay: 0.1,
                     stagger: 0.1,
                 }, 0)
                 .to(rest.filter(i => i !== prv).map(i => slideItemRefs.current[i]), {
                    x: (i, target) => {
                        const originalIndex = order.current.indexOf(parseInt(target.id.replace('slide-item-','')));
                        return originalIndex * numberSize;
                    },
                     ease,
                 }, 0);
            // Fade overlay slightly during transition and back to 1
            if (activeOverlayRef.current) {
                gsap.to(activeOverlayRef.current, { opacity: 0.9, duration: 0.3, ease }, 0)
                    .to(activeOverlayRef.current, { opacity: 1, duration: 0.3, ease }, 0.3);
            }
        };
        stepRef.current = step;
        
        const loop = () => {
            const tl = gsap.timeline({ onComplete: () => {
                step(1);
                timeoutId.current = setTimeout(loop, 3000); // Loop after animation + delay
            }});
            if (indicatorRef.current) {
                tl.to(indicatorRef.current, { x: 0, duration: 2 })
                  .to(indicatorRef.current, { x: window.innerWidth, duration: 0.8, delay: 0.3 })
                  .set(indicatorRef.current, { x: -window.innerWidth });
            } else {
                tl.to({}, { duration: 2.8 });
            }
        };
        loopRef.current = loop;
        
        init();
    
    }, [isLoaded, items, showNav, showPagination]);
    
    const Details = ({ item, ...props }) => {
        // Generate route URL based on place name
        const getRouteUrl = (place) => {
            const routeMap = {
                'Uttarakhand': '/routes/delhi-to-uttarakhand',
                'Himachal Pradesh': '/routes/delhi-to-himachal',
                'Rajasthan': '/routes/delhi-to-rajasthan',
                'Uttar Pradesh': '/routes/delhi-to-up',
                'Punjab': '/routes/delhi-to-punjab'
            };
            return routeMap[place] || '#';
        };

        // Generate Google Maps URL based on place name
        const getGoogleMapsUrl = (place) => {
            const mapsUrl = {
                'Uttarakhand': 'https://maps.google.com/maps?q=Uttarakhand,+India',
                'Himachal Pradesh': 'https://maps.google.com/maps?q=Himachal+Pradesh,+India',
                'Rajasthan': 'https://maps.google.com/maps?q=Rajasthan,+India',
                'Uttar Pradesh': 'https://maps.google.com/maps?q=Uttar+Pradesh,+India',
                'Punjab': 'https://maps.google.com/maps?q=Punjab,+India'
            };
            return mapsUrl[place] || 'https://maps.google.com';
        };

        return (
            <div className={styles.details} {...props}>
                 <div className={styles.placeBox}><div className={`${styles.text} text`}>{item.place}</div></div>
                 <div className={styles.titleBox1}><div className={`${styles.title1} title-1`}>{item.title}</div></div>
                 <div className={styles.titleBox2}><div className={`${styles.title2} title-2`}>{item.title2}</div></div>
                 <div className={`${styles.desc} desc`}>{item.description}</div>
                 <div className={`${styles.cta} cta`}>
                     <a href={getGoogleMapsUrl(item.place)} target="_blank" rel="noopener noreferrer" className={styles.bookmark}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                     </a>
                     <Link href={getRouteUrl(item.place)} className={`${styles.discover} flex items-center`}>Discover Location</Link>
                 </div>
            </div>
        );
    };

    // Manual controls
    const handleNext = () => {
        if (!isLoaded || isAnimating.current) return;
        if (timeoutId.current) clearTimeout(timeoutId.current);
        if (stepRef.current) stepRef.current(1);
        timeoutId.current = setTimeout(() => {
            if (loopRef.current) loopRef.current();
        }, 3000);
    };

    const handlePrev = () => {
        if (!isLoaded || isAnimating.current) return;
        if (timeoutId.current) clearTimeout(timeoutId.current);
        if (stepRef.current) stepRef.current(-1);
        timeoutId.current = setTimeout(() => {
            if (loopRef.current) loopRef.current();
        }, 3000);
    };

    return (
        <div className={styles.timedCardRoot}>
            {!isLoaded && <div className={styles.cover}></div>}

            {/* <div className={styles.indicator} ref={indicatorRef}></div> */}
            {/* Dark overlay above active full-screen card */}
            <div className={styles.activeOverlay} ref={activeOverlayRef}></div>
            {showNav && (
                <nav ref={navRef} className={styles.nav}>
                    <div>
                        <div className={styles.svgContainer}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg></div>
                        <div>Globe Express</div>
                    </div>
                    <div>
                        <div className={styles.active}>Home</div>
                        <div>Holidays</div>
                        <div>Destinations</div>
                        <div>Flights</div>
                        <div>Offers</div>
                        <div>Contact</div>
                        <div className={styles.svgContainer}><svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg></div>
                        <div className={styles.svgContainer}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" /></svg></div>
                    </div>
                </nav>
            )}

            <div id="demo">
                {items.map((item, index) => (
                    <div key={`${item.title}-${index}`} >
                        <div
                            id={`card${index}`}
                            className={styles.card}
                            ref={el => cardRefs.current[index] = el}
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <div
                            id={`card-content-${index}`}
                            className={styles.cardContent}
                            ref={el => cardContentRefs.current[index] = el}
                        >
                            <div className={styles.contentStart}></div>
                            <div className={styles.contentPlace}>{item.place}</div>
                            <div className={styles.contentTitle1}>{item.title}</div>
                            <div className={styles.contentTitle2}>{item.title2}</div>
                        </div>
                    </div>
                ))}
            </div>

            {items && items.length > 0 && (
                <>
                    <Details item={detailsEven.current ? currentDetails : items[order.current[0]]} ref={detailsEvenRef} />
                    <Details item={!detailsEven.current ? currentDetails : items[order.current[0]]} ref={detailsOddRef} />
                </>
            )}
            
            {showPagination && (
                <div className={styles.pagination} ref={paginationRef}>
                    <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                    </div>
                    <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </div>
                    <div className={styles.progressSubContainer}>
                        <div className={styles.progressSubBackground}>
                            <div className={styles.progressSubForeground} ref={progressSubForegroundRef}></div>
                        </div>
                    </div>
                    <div className={styles.slideNumbers}>
                        {items.map((_, index) => (
                            <div key={index} id={`slide-item-${index}`} className={styles.item} ref={el => slideItemRefs.current[index] = el}>
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {isLoaded && <div className={styles.cover} ref={coverRef}></div>}
        </div>
    );
}