import { memo } from 'react';

const LoginForm = ({}) => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input />
      </div>
      <div>
        <label>Email</label>
        <input />
      </div>
      <button>Save</button>
    </form>
  );
};

export default memo(LoginForm);
