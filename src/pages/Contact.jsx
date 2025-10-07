import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div
      className="contact-page min-vh-100"
      style={{
        marginTop: "76px",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary mb-3">Get In Touch</h1>
          <p className="lead text-muted">
            Let's discuss your next project or opportunity
          </p>
          <hr className="w-25 mx-auto border-primary opacity-75" />
        </div>

        <div className="row g-4 justify-content-center">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary mb-4">Contact Information</h4>

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Phone</h6>
                    <small className="text-muted">+254 746 976 573</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Email</h6>
                    <small className="text-muted">ewwabwoba@gmail.com</small>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Location</h6>
                    <small className="text-muted">Nairobi, Kenya</small>
                  </div>
                </div>

                <hr className="my-4" />
                <h6 className="fw-bold text-dark mb-3">Connect with me</h6>
                <div className="d-flex gap-2">
                  <a
                    href="https://github.com/ewwabwoba"
                    className="btn btn-outline-dark btn-sm flex-fill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/ezekiel-wabwoba"
                    className="btn btn-outline-primary btn-sm flex-fill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin me-2"></i>LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary mb-4">Send Me a Message</h4>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Subject <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control bg-light border-0"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project..."
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>

                    <div className="col-12 mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 fw-semibold"
                        disabled={isSubmitting}
                        style={{
                          borderRadius: "10px",
                          background:
                            "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)",
                          border: "none",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>Send
                            Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="row mt-5 text-center">
          <div className="col-md-4 mb-3">
            <i className="fas fa-clock text-primary fa-2x mb-2"></i>
            <h6 className="fw-bold text-dark">Response Time</h6>
            <p className="text-muted small mb-0">Within 24 hours</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="fas fa-calendar-check text-primary fa-2x mb-2"></i>
            <h6 className="fw-bold text-dark">Availability</h6>
            <p className="text-muted small mb-0">Monday - Friday</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-globe text-primary fa-2x mb-2"></i>
            <h6 className="fw-bold text-dark">Timezone</h6>
            <p className="text-muted small mb-0">EAT (UTC+3)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
