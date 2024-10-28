import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title, body} = post;
    const postDetailsStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={postDetailsStyle}>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;