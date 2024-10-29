import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id,title, body} = post;

    console.log(postId);
    const postDetailsStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div style={postDetailsStyle}>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;