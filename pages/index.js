import { useEffect } from 'react';

const RomanticMessage = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      heart.style.position = 'fixed'; // Mudado para fixed
      heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const intervalId = setInterval(createHeart, 300);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen relative flex justify-center items-center bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4]">
      <div className="text-center p-8 bg-white/90 rounded-3xl shadow-lg animate-float relative z-10">
        <h1 className="text-4xl text-[#ff4b6a] mb-4">❤️ Mensagem Especial ❤️</h1>
        <div className="text-2xl text-gray-600 leading-relaxed">
          Wanessa, amo você.<br />
          Se você me ama, dá uma risadinha!
          <div className="text-4xl mt-4 animate-pulse">😎</div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes hearts {
          0% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-100px) scale(0); 
            opacity: 0; 
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .heart {
          font-size: 2rem;
          opacity: 0;
          z-index: 5;
          animation: hearts 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RomanticMessage;