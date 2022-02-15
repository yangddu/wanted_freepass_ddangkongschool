import * as S from './YellowBanner.style';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

interface Logo {
  SRC: string;
  WIDTH: string;
  HEIGHT: string;
  ALT: string;
}

const YellowBanner = () => {
  const LOGO: Logo = {
    SRC: '/images/logo.gif',
    WIDTH: '101',
    HEIGHT: '75',
    ALT: 'logo',
  };

  return (
    <S.Container>
      <S.Wrap>
        <Image
          src={LOGO.SRC}
          width={LOGO.WIDTH}
          height={LOGO.HEIGHT}
          alt={LOGO.ALT}
        />
        <Fade bottom>
          <S.Title>땅콩스쿨이란?</S.Title>
        </Fade>
        <Fade bottom>
          <S.Text>
            실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,
            <br />
            친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인
            서비스입니다.
          </S.Text>
        </Fade>
      </S.Wrap>
    </S.Container>
  );
};

export default YellowBanner;
