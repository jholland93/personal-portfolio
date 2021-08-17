
import React from 'react';
import { AiFillGithub,AiFillDribbbleCircle,AiFillLinkedin} from 'react-icons/ai';
import { SocialIcons,SocialContainer } from './SocialStyles';



export const Social = () => (
<SocialContainer>
    <SocialIcons href="https://github.com">
    <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://github.com">
    <AiFillDribbbleCircle size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://github.com">
    <AiFillLinkedin size="3rem"/>
    </SocialIcons>

</SocialContainer>


);

