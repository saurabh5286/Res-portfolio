import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);

  // Simulate submission then reset form
  setFormData({ name: '', email: '', message: '' });
};


  return (
    <div
      style={{
        maxWidth: '480px',
        margin: '40px auto',
        padding: '30px 25px',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '12px',
          fontWeight: '700',
          fontSize: '1.8rem',
          color: '#4f46e5',
        }}
      >
        Contact Us
      </h2>
      <p
        style={{
          textAlign: 'center',
          marginBottom: '32px',
          color: '#6b7280',
          fontSize: '1rem',
          lineHeight: '1.5',
        }}
      >
        Or reach out directly at{' '}
        <a
          href="mailto:saurabhhardel5286@gmail.com"
          style={{ color: '#4f46e5', textDecoration: 'underline' }}
        >
          saurabhhardel5286@gmail.com
        </a>
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <label
          htmlFor="name"
          style={{
            display: 'block',
            fontWeight: '600',
            marginBottom: '8px',
            fontSize: '0.95rem',
          }}
        >
          Full Name
        </label>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '9999px',
            border: '1.5px solid #d1d5db',
            padding: '0 12px',
            marginBottom: '20px',
            transition: 'border-color 0.3s ease',
          }}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px', color: '#6b7280' }}
          >
            <path
              d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
              fill="currentColor"
            />
          </svg>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              height: '40px',
              fontSize: '1rem',
              background: 'transparent',
              color: '#111827',
            }}
          />
        </div>

        {/* Email Address */}
        <label
          htmlFor="email"
          style={{
            display: 'block',
            fontWeight: '600',
            marginBottom: '8px',
            fontSize: '0.95rem',
          }}
        >
          Email Address
        </label>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '9999px',
            border: '1.5px solid #d1d5db',
            padding: '0 12px',
            marginBottom: '20px',
            transition: 'border-color 0.3s ease',
          }}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px', color: '#6b7280' }}
          >
            <path
              d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
              fill="currentColor"
            />
          </svg>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              height: '40px',
              fontSize: '1rem',
              background: 'transparent',
              color: '#111827',
            }}
          />
        </div>

        {/* Message */}
        <label
          htmlFor="message"
          style={{
            display: 'block',
            fontWeight: '600',
            marginBottom: '8px',
            fontSize: '0.95rem',
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          style={{
            width: '100%',
            borderRadius: '12px',
            border: '1.5px solid #d1d5db',
            padding: '12px 15px',
            fontSize: '1rem',
            fontFamily: 'inherit',
            resize: 'none',
            color: '#111827',
            outline: 'none',
            transition: 'border-color 0.3s ease',
            marginBottom: '24px',
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#4f46e5',
            color: '#fff',
            padding: '14px',
            borderRadius: '9999px',
            fontWeight: '700',
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#4338ca')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = '#4f46e5')
          }
        >
          Submit Form
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: '2px' }}
          >
            <path
              d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
              fill="#fff"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Contact;

