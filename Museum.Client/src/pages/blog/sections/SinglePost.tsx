import { IPostData } from "../../../types/interfaces/IPostData";
import Appearance from "./Appearance";

function limitTextByWords(text: string, maxWords: number): string {
  return text
    .split(' ')
    .slice(0, maxWords)
    .join(' ')
}

function SinglePost({ postData }: { postData: IPostData }) {
  return (
    <div className="col-lg-4 col-md-6 single-blog">
      <div className="thumb">
        <img className="img-fluid" src={postData.image} alt="" />
      </div>
      <p className="date">{postData.date.toString()}</p>
      <a href="#">
        <h4>{limitTextByWords(postData.title, 7)}</h4>
      </a>
      <div className="para-container">
        <p className="para-content">{limitTextByWords(postData.content, 23)}...</p>
      </div>
      <div className="pt-10">
        <div className="meta-bottom d-flex justify-content-between">
          <p>
            <Appearance />
          </p>
          <a href="#"><span className="lnr lnr-bubble"></span> {postData.comments} Comments</a>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
