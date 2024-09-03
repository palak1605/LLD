const CommentBox = ({ data }) => {
    return data.map((comment, index) => (
      <div
        style={{
          paddingLeft: '40px', // equivalent to pl-10
          borderLeft: '2px solid black', // equivalent to border-l-2 border-black
        }}
        key={index}
      >
        <div style={{ display: 'flex' }}> {/* equivalent to flex */}
          <div>
            <img
              style={{
                width: '64px', // equivalent to w-16
                padding: '8px', // equivalent to p-2
                borderRadius: '50%', // equivalent to rounded-full
              }}
              src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
              alt="user"
            />
          </div>
          <div>
            <p
              style={{
                fontWeight: 'bold', // equivalent to font-bold
                padding: '16px 8px', // equivalent to px-2 py-4
              }}
            >
              {comment.username}
            </p>
            <p style={{ padding: '0 8px' }}>{comment.comment}</p> {/* equivalent to px-2 */}
          </div>
        </div>
        <div>{comment?.replies && <CommentBox data={comment.replies} />}</div>
      </div>
    ));
  };
  
  export default CommentBox;
  