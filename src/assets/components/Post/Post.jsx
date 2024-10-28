const Post = ({post}) => {
    const {id, title} = post;
    const userStyle = {
        border: '2px solid pink',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h4>Post Of Id: {id}</h4>
            <h4>{title}</h4>
        </div>
    );
};

export default Post;