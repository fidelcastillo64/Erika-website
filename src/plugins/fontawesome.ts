import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faXTwitter,faFacebook, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export function initializeFontAwesome() {
    library.add(faEnvelope, faXmark, faBars, faGithub, faLinkedin, faTwitter, faXTwitter, faFacebook, faInstagram, faSquareFacebook);
}