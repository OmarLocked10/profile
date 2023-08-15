import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-embed">
      <iframe
        width="1375" // Adjust width as needed
        height="777" // Adjust height as needed
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
