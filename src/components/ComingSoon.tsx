import ComingSoonImg from 'assets/images/coming-soon.png';

function ComingSoon() {
  return (
    <div className="w-200 h- col-span-7 flex animate-pulse flex-col items-center justify-center">
      <img
        className="h-96 object-cover object-center pt-10"
        src={ComingSoonImg}
        alt="coming soon"
      />
      <div className="text-2xl">Feature coming soon...</div>
    </div>
  );
}

export default ComingSoon;
