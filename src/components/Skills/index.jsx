import React from "react";
import { Progress } from 'antd';

export default function index() {
  return (
    <div style={{ backgroundColor: "black", color: 'white', padding: '6rem' }}>
      <h1 className='text-2xl mx-auto text-green-800' style={{ marginBottom: '3rem', color: 'white', fontSize: '40px', paddingBottom: '2rem', textAlign: 'left' }}>
        MY SKILLS
      </h1>

      <p style={{ textAlign: 'left', fontSize: '20px' }}>
        This section highlights my adeptness in the MERN stack, showcasing my ability to build dynamic and responsive web applications. Additionally, it outlines my experience with backend technologies such as Flask and Python, emphasizing my versatility in handling various development environments. With a strong foundation in both frontend and backend technologies, I am well-equipped to tackle complex software engineering challenges and deliver high-quality solutions.
      </p>

      <div style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', gap: '7rem', marginBottom: '2rem' }}>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '0.5rem', textAlign: 'left', fontSize: '20px' }}>React</div>
            <Progress
              percent={90}
              strokeColor="blue"
              trailColor="#D3D3D3"
              size={[430, 20]}
              percentPosition={{ align: 'end', type: 'inner' }}
              style={{ width: '400px', height: '20px', borderRadius: '10px' }}
            />
          </div>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '0.5rem', textAlign: 'left', fontSize: '20px' }}>Node.js & Express.js</div>
            <Progress
              percent={85}
              strokeColor="blue"
              trailColor="#D3D3D3"
              size={[430, 20]}
              percentPosition={{ align: 'end', type: 'inner' }}
              style={{ width: '400px', height: '20px', borderRadius: '10px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '7rem', marginBottom: '2rem' }}>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '0.5rem', textAlign: 'left', fontSize: '20px' }}>Javascript, HTML, CSS</div>
            <Progress
              percent={80}
              strokeColor="orange"
              trailColor="#D3D3D3"
              size={[430, 20]}
              percentPosition={{ align: 'end', type: 'inner' }}
              style={{ width: '400px', height: '20px', borderRadius: '10px' }}
            />
          </div>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '0.5rem', textAlign: 'left', fontSize: '20px' }}>MongoDB</div>
            <Progress
              percent={90}
              strokeColor="purple"
              trailColor="#D3D3D3"
              size={[430, 20]}
              percentPosition={{ align: 'end', type: 'inner' }}
              style={{ width: '400px', height: '20px', borderRadius: '10px' }}
            /> </div>
        </div>

        <div style={{ display: 'flex', gap: '7rem' }}>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '0.5rem', textAlign: 'left', fontSize: '20px' }}>Restful API Development</div>
            <Progress
              percent={85}
              strokeColor="orange"
              trailColor="#D3D3D3"
              size={[430, 20]}
              percentPosition={{ align: 'end', type: 'inner' }}
              style={{ width: '400px', height: '20px', borderRadius: '10px' }}
            />
          </div>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '0.5rem', textAlign: 'left', fontSize: '20px' }}>C#, C++, JAVA, Python</div>
            <Progress
              percent={70}
              strokeColor="purple"
              trailColor="#D3D3D3"
              size={[430, 20]}
              percentPosition={{ align: 'end', type: 'inner' }}
              style={{ width: '400px', height: '20px', borderRadius: '10px' }}
            /> </div>
        </div>


      </div>
    </div>
  );
}
