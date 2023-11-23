import { FC, useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import { GetAlbumsForUserId } from "../../requests/AlbumService";
import { GetTodosForUserId } from "../../requests/TodoService";
import { GetPostsForUserId } from "../../requests/PostService";
import { Album } from "../../types/Album";
import { Todo } from "../../types/Todo";
import { Post } from "../../types/Post";
import { AlbumTile } from "../common/AlbumTile";
import { TodoTile } from "../common/TodoTile";
import { PostTile } from "../common/PostTile";

interface IProps{

}

export const Profile: FC<IProps> = props =>{

    const { id } = useParams<{id : string}>();

    const [albums, setAlbums] = useState<Album[] | null>();
    const [todos, setTodos] = useState<Todo[] | null>();
    const [posts, setPosts] = useState<Post[] | null>();

    useEffect(()=>{
        GetAlbumsForUserId(Number(id))
        .then(albums => setAlbums(albums));

        GetTodosForUserId(Number(id))
        .then(todos => setTodos(todos));

        GetPostsForUserId(Number(id))
        .then(posts => setPosts(posts));
    },[]);

    const ToggleTodo = (todoId: number, isCompleted: boolean) =>{
        setTodos((prevState) => 
        {     
            return prevState?.map((todo) => {
                if(todo.id == todoId){
                    todo.complited = isCompleted;
                }
                return todo;
            })
        }
        )
    }

    return (
        <div className="flex flex-col gap-8 m-10">
            <p>
                this is profile page!
                your id is: {id}
            </p>
            <div className='flex flex-col flex-wrap gap-5'>
                <p>Albums:</p>  
                <div className="flex flex-row flex-wrap gap-5">
                {albums?.map(album =>
                    <AlbumTile album={album} key={album.id} />
                    )}
                 </div>
            </div>
            <div className="flex flex-col gap-5">   
                 <p>Todos:</p>   
                 <div className="flex flex-row flex-wrap gap-5">
                 {todos?.map(todo =>
                    <TodoTile todo={todo} toggleTodo={ToggleTodo} key={todo.id} />
                    )}  
                 </div>
            </div>
            <div className="flex flex-col gap-5">   
                 <p>Posts:</p>   
                 <div className="flex flex-col gap-5">
                 {posts?.map(post =>
                    <PostTile post={post} key={post.id} />
                    )}  
                 </div>
            </div>
            <Link to="/" >Go to home page</Link>
        </div>
    )
}