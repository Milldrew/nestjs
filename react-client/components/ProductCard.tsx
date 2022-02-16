export function ProductCard(props) {
  return (
    <>
      <article
        style={{
          backgroundColor: "#dedede44",
        }}
      >
        <header style={{ display: "flex", justifyContent: "center" }}>
          <h2>{props.title}</h2>
        </header>
        <main
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <section
            style={{
              margin: "0% 4%",
              padding: "0% 0%",
            }}
          >
            <img
              style={{
                border: "1px solid #00000022",
                width: "100%",
              }}
              src={props.productImgUrl}
              alt="sweat pants"
            />
          </section>

          <section
            style={{
              margin: "0% 4%",
              padding: "0% 0%",
            }}
          >
            {props.description}
          </section>
        </main>
        <footer style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              margin: "3% 0 3% 0",
              padding: "0 0 0 0",
              fontWeight: 600,
              letterSpacing: 0.2,
            }}
          >
            <span>Price: ${props.priceInDollars}</span>
          </p>
        </footer>
      </article>
    </>
  );
}
