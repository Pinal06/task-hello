import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Hello, World');

    const handleChange = (e) => {
        setText('Hey!');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-body">
                            <h1 className="text-center">{text}</h1>
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-outline-dark mx-2"
                                    onClick={handleChange}
                                >
                                    Change Text
                                </button>
                            </div>
                            <h2 className="text-center mt-4">Counter: {count}</h2>
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-success mx-2"
                                    onClick={() => setCount(count + 1)}
                                >
                                    Increment
                                </button>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => setCount(count - 1)}
                                >
                                    Decrement
                                </button>
                                <button
                                    className="btn btn-secondary mx-2"
                                    onClick={() => setCount(0)}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;