import React from 'react'
import PropTypes from 'prop-types'

function SocialMedia({socialMedias}) {
    return (
        <div className="social-media-column">
            {
                socialMedias.map((socialMedia)=> (
                    <a href={socialMedia.link}>
                        {
                            <span data-social={socialMedia.social} style={{background: `currentColor url(${socialMedia.logo}) no-repeat `}}></span>
                        }
                    </a>
                ))
            }
        </div>
    )
}

SocialMedia.propTypes = {
    socialMedias: PropTypes.array.isRequired
}

export default SocialMedia

