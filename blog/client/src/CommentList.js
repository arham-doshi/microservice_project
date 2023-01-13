import React, {useState, useEffect} from "react";
import axios from "axios";

export default function CommentList({ comments }) {

    
    console.log(comments);
    

    

    const renderedComment = comments.map(comment => {
        return <li key = {comment.id}> { comment.content }</li>
    });
    return <ul>{renderedComment}</ul>

}