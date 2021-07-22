import { Badge } from '@material-ui/core';
import React from 'react'
import { img_300, unavailable } from '../../config/config';
import ContentModal from '../Content modal/ContentModal';
import './SingleContent.css'

const SingleContent = ({id, poster,title, date, vote_average , media_type}) => {
    return (
      <ContentModal media_type={media_type} id={id} className="media">
          <Badge badgeContent={vote_average} color={vote_average>6 ? 'primary': 'secondary'} />
        <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable } alt={title} />
        <b className="title">{title}</b>
        <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movies"}
            <span className="subTitle">{date}</span>
        </span>
      </ContentModal>
    );
}

export default SingleContent
