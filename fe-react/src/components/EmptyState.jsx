import emptyLogo from "../assets/empty_state.svg";

const EmptyState = () => {
  return (
    <div className="empty">
      <div className="image">
        <img src={emptyLogo} alt=""></img>
      </div>
      <span>Try to login And add post to see the content</span>
    </div>
  );
};

export default EmptyState;
