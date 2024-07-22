import React from "react";
import styles from './styles.module.css'



export default function index() {
  return (
    <div>


      <section className={styles.gradient}>

        <h1 className='text-2xl mx-auto text-green-800' style={{ fontSize: '40px', padding: '5rem', textAlign: 'left' }}>
          WORK EXPERIENCE
        </h1>
        <div className="container py-3">
          <div className={styles.main_timeline}>
            <div className={`${styles.timeline} ${styles.right}`}>
              <div className="card">
                <div className="card-body p-4">
                  <h5>RESTFUL API DEVELOPMENT AT PTCL</h5>
                  <span className="small text-muted"><i className="fas fa-clock me-1"></i>21 March, 2023</span>
                  <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                    diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
                    sagittis ligula in sodales vehicula....</p>
                </div>
              </div>
            </div>
            <div className={`${styles.timeline} ${styles.right}`}>
              <div className="card">
                <div className="card-body p-4">
                  <h5>FULL STACK DEVELOPMENT AT PRODIGY</h5>
                  <span className="small text-muted"><i className="fas fa-clock me-1"></i>15 June, 2024</span>
                  <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam
                    non nisi semper.</p>
                  <p className="mb-0">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error
                    architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.timeline} ${styles.right}`}>
              <div className="card">
                <div className="card-body p-4">
                  <h5>WEB DEVELOPMENT AT COGNORISE INFOTECH</h5>
                  <span className="small text-muted"><i className="fas fa-clock me-1"></i>18 August, 2020</span>
                  <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
                    diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
                    sagittis ligula in sodales vehicula....</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
