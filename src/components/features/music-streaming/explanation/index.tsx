import TextHighlight from "@/components/text-highlight.tsx";

const MusicStreamingExplanation = () => {
  return (
    <div className="space-y-[20px]">
      <p>
        This feature makes use of{" "}
        <TextHighlight
          text="react-use-audio-player"
          textLink="https://www.npmjs.com/package/react-use-audio-player"
        />{" "}
        library built on top of{" "}
        <TextHighlight text="howler.js" textLink="https://howlerjs.com/" />, a
        library that makes working with audio in the browser easier.
      </p>
      <p>
        The library provides two hooks to work with audios in react.{" "}
        <TextHighlight text="useAudioPlayer" /> and{" "}
        <TextHighlight text="useGlobalAudioPlayer" />. The implementation makes
        use of the latter hook since we need access to the same audio status,
        controls, and functions in different components i.e. the audio player
        component at the bottom and the audio cards.
      </p>
      <p>
        All the audio controls and functions are provided by the audio hook and
        you just have to play with it to get the hang of it.
      </p>
      <p>
        As for the audio files, for now they are static contents and are placed
        directly inside the <TextHighlight text="public" /> folder of the repo.
        This is not an ideal way to store and read audio files in real
        applications. So in real apps, you would store it in some CDN server and
        fetch from there and render it for the users to listen to the songs.
      </p>
    </div>
  );
};

export default MusicStreamingExplanation;
