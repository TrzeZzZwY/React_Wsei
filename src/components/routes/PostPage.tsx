import { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetCommentsForPostId } from "../../requests/CommentService";
import { Comment } from "../../types/Comment";
import { CommentTile } from '../common/CommentTile';
import { CommentForm } from '../common/CommentForm';
interface IProps {

}

export const PostPage: FC<IProps> = props => {

    const { id } = useParams<{ id: string }>();

    const [comments, setComments] = useState<Comment[] | null>();

    const [showForm, setShowForm] = useState(false);

    const [myCommnetId, setMyCommnetId] = useState<number>();

    useEffect(() => {
        GetCommentsForPostId(Number(id))
            .then(comments => {
                setComments(comments);
                setMyCommnetId(comments.length);
            }
            );
    }, [])

    const ToggleDelete = (commentId: number) => {
        setComments((prevState) => {
            return prevState?.filter(comment => {
                console.log(comment.id + " " + commentId);
                return comment.id != commentId
            }
            )
        })
    }

    const showFormToggle = () => {
        setShowForm(!showForm);
    }

    const handleUpdate = (comment: Comment) => {
        setComments((prevState) => {
            return prevState?.map(c => {
                if (c.id == comment.id) {
                    c = comment;
                }
                return c;
            })
        })
    }

    const handleAdd = (comment: Comment) => {
        comment.id = myCommnetId ? myCommnetId + 1 : 0;
        console.log("test: " + comment.id);
        setComments((prevState) => {
            return prevState ? [...prevState, comment] : []
        })
        setMyCommnetId(comment.id);
    }

    return (
        <div className='flex flex-col gap-5 m-10'>
            <span className='text-xl'>Comments:</span>
            <button onClick={showFormToggle} className='border border-2  border-black rounded w-24 h-12 bg-green-300'>Add</button>
            {showForm && (
                <div className="">
                    <CommentForm handleAdd={handleAdd} handleUpdate={handleUpdate} />
                </div>
            )}
            {comments?.slice().reverse().map(comment =>
                <CommentTile comment={comment} toggleDelete={ToggleDelete} key={comment.id} handleAdd={handleAdd} handleUpdate={handleUpdate} />
            )}
        </div>
    )
}