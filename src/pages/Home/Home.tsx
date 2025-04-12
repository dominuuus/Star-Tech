import { HomeContainer } from './Home.styles';
import images from '../../assets/images';

export function Home() { 
    return (


        <HomeContainer>
            <div>
                <div>
                    <span>Nebula.dev</span>
                </div>
                <div>
                    <img src={images.astronaut1} alt="" />
                </div>
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut in excepturi harum enim tempore, porro nisi unde ut quasi eaque rerum minus maiores eligendi libero iusto impedit voluptatibus ratione. Itaque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque animi ad perspiciatis iusto est cumque explicabo, dignissimos officiis? Eaque in dolor ipsum consectetur, assumenda adipisci impedit deserunt sequi inventore?</p>
            </div>

        </HomeContainer>
    )

}