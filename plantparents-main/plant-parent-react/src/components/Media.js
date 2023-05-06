function Media() {
  return (
    <>
      <section>
        <div class="media">
        <h5 class="text-muted">Check out our Youtube Channel...</h5>
          <iframe
            width="1200"
            height="600px"
            src="https://www.youtube.com/embed/videoseries?list=PLQ4aOVlR2Z5Vw1rjf6U4XF-uW8MZa86Gl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
}
export default Media;
