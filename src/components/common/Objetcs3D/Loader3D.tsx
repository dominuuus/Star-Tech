export function Loader3D() {
    return (
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}>
        <img
          src=""
          alt="Carregando"
          style={{
            width: 50,
            height: 50,
            animation: "spin 1s linear infinite",
          }}
        />
      </div>
    );
  }