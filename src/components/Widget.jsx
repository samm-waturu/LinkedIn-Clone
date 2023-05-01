import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import '../component-styles/widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className='widgets_article'>
                <div className="widgets_articleLeft">
                    <FiberManualRecordIcon/>
                </div>
                <div className='widgets_articleRight'>
                    <h4>
                        {heading}
                    </h4>
                    <p>
                        {subtitle}
                    </p>

                </div>

            </div>
        )

    }

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>
                    Dummy text
                </h2>
                <InfoIcon/>
            </div>
            {newsArticle("My first React build", "Top news - 2 reads")}
            {newsArticle("Hello world in C++", "Top news - 3 reads")}
            {newsArticle("GPT-4 to be enrolled soon", "Top news - 5 reads")}
            {newsArticle("Is React Native any worth it?", "Top news - 10 reads")}
            {newsArticle("Lorem ipsum dummy text", "Top news - 1 reads")}
        </div>
    )
}

export default Widgets
