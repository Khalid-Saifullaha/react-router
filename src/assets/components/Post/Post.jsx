import { Link, Navigate, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post; 

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid pink',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post Of Id: {id}</h4>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}><button >Post Detail</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;