import React from "react";

class Post extends React.Component
{
    //state =
    //    {
    //        title: "",
    //        description:""
    //    }

    //constructor(props)
    //{
    //    super(props)
    //    this.setState({ posts.props.posts });

    //}

    render()
    {
        return (
            <fieldset key={this.props.id}>
                <legend style={{ fontWeight: "bold" }}>{ this.props.title }</legend>
                <p>{ this.props.description }</p>
            </fieldset>
        )
    }
}
export default Post;


