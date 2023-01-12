import React, {useState, useEffect} from "react";
import axios from "axios";

export default function CommentList({ postId }) {

    const [comments, setComments] = useState([]);

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            
        },
        withCredentials: true
    };

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const renderedComment = comments.map(comment => {
        return <li key = {comment.id}> { comment.content }</li>
    });
    return <ul>{renderedComment}</ul>

}