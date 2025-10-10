'use client';
import { useState, useEffect } from 'react';

const ContactDetailModal = ({ isOpen, onClose, contactId }) => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateData, setUpdateData] = useState({
    status: '',
    adminResponse: '',
    respondedBy: ''
  });

  useEffect(() => {
    if (isOpen && contactId) {
      fetchContactDetails();
    }
  }, [isOpen, contactId]);

  const fetchContactDetails = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/admin/contacts?contactId=${contactId}`);
      const data = await response.json();
      
      if (data.success && data.contact) {
        setContact(data.contact);
        setUpdateData({
          status: data.contact.status || '',
          adminResponse: data.contact.adminResponse || '',
          respondedBy: data.contact.respondedBy || ''
        });
      } else {
        setError(data.error || 'Failed to fetch contact details');
      }
    } catch (error) {
      console.error('Error fetching contact details:', error);
      setError('Failed to fetch contact details');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/contacts?id=${contactId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (result.success) {
        setContact(result.contact);
        alert('Contact inquiry updated successfully!');
      } else {
        alert('Failed to update contact inquiry');
      }
    } catch (error) {
      console.error('Error updating contact:', error);
      alert('Failed to update contact inquiry');
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return 'Not specified';
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'responded': return 'bg-green-100 text-green-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Contact Inquiry Details</h2>
              {contact && (
                <p className="text-indigo-600 font-medium">#{contact.inquiryId}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              <span className="ml-3 text-gray-600">Loading contact details...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700">{error}</span>
              </div>
            </div>
          )}

          {contact && (
            <div className="space-y-6">
              {/* Status Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(contact.status)}`}>
                    {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                  </span>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Type</h3>
                  <span className="text-gray-800 capitalize">{contact.inquiryType}</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-gray-800 font-medium">{contact.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <p className="text-gray-800">{contact.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Phone</label>
                    <p className="text-gray-800">{contact.phone ? `+91${contact.phone}` : 'Not provided'}</p>
                  </div>
                </div>
              </div>

              {/* Inquiry Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Inquiry Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Subject</label>
                    <p className="text-gray-800 font-medium">{contact.subject}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Message</label>
                    <div className="bg-white p-4 rounded-lg border">
                      <p className="text-gray-800 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Response Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Admin Response</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Response Message</label>
                    <textarea
                      value={updateData.adminResponse}
                      onChange={(e) => setUpdateData(prev => ({ ...prev, adminResponse: e.target.value }))}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your response to the customer..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Status</label>
                    <select
                      value={updateData.status}
                      onChange={(e) => setUpdateData(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="new">New</option>
                      <option value="in_progress">In Progress</option>
                      <option value="responded">Responded</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Responded By</label>
                    <input
                      type="text"
                      value={updateData.respondedBy}
                      onChange={(e) => setUpdateData(prev => ({ ...prev, respondedBy: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Admin name"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Inquiry Submitted</p>
                      <p className="text-xs text-gray-600">{formatDate(contact.inquiryDate)}</p>
                    </div>
                  </div>
                  {contact.responseDate && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Response Sent</p>
                        <p className="text-xs text-gray-600">{formatDate(contact.responseDate)}</p>
                      </div>
                    </div>
                  )}
                  {contact.lastUpdated && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Last Updated</p>
                        <p className="text-xs text-gray-600">{formatDate(contact.lastUpdated)}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 disabled:cursor-not-allowed"
            >
              {isUpdating ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </div>
              ) : (
                'Update Inquiry'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailModal;
