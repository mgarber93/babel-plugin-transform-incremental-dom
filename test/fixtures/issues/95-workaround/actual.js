
function renderMain() {
  function renderState({ bar }) {
    const workAround = t => t;
    return ([
      <span
        foo={ workAround`My bar is: ${bar}`}
      >one</span>,
      <span
        foo={ workAround`My bar is: ${bar}`}
      >two</span>,
      <span
        foo={ workAround`My bar is: ${bar}`}
      >three</span>
    ]);
  }

  const state = {
    bar: 'Hello World'
  };

  return renderState(state);
}
