import * as React from 'react';
export default function Footer() {
  return (
    <footer className="sticky-footer" style={{ height: '50px' }}>
      <div className="container my-auto">
        <div className="copyright text-center my-auto" style={{ padding: '15px' }}>
          <span>Copyright &copy; YouWeb 2021</span>
        </div>
      </div>
    </footer>
  );
}