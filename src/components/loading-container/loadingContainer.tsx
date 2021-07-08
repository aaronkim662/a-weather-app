import './loadingContainer.sass';
import spinner from './spinner.gif';

const LoadingContainer = () => {
  return <div>
    <img
      src= {spinner}
      className = 'loading-spinner'
      alt="Loading..."
      />
  </div>
};

export default LoadingContainer;