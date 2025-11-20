function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;
