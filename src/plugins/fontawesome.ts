import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faXmark, faBars, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faXTwitter,faFacebook, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export function initializeFontAwesome() {
    library.add(faEnvelope, faXmark, faBars, faBuildingColumns, faGithub, faLinkedin, faTwitter, faXTwitter, faFacebook, faInstagram, faSquareFacebook);
}