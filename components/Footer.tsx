import styled from 'styled-components';

const FooterBlock = styled.footer`
	.footer-inner-box {
        justify-content: left;
		width: 100%;
		height: 250px;
        color: #815854;
        .cs-center-inner-box{
            padding: 0px 150px 0px 100px;
            .cs-center-text{
                margin:0px 0px 10px 3px;
                font: bold 18px/1 'apple';
            }
            .cs-center-number{
                margin-bottom: 10px;
                font: bold 30px/1 'apple';
            }
            .cs-time-text{
                margin-bottom: 10px;
                font: 14px/1 'apple';
                span{
                    &:nth-of-type(1){
                        &::after{
                            content: '|';
                            margin: 0px 5px;
                        }
                    }
                }
            }
            .cs-closed-date{
                margin-bottom: 10px;
                font: 14px/1 'apple';
            }
        }
        .company-inner-box{
            font:  15px/1 'apple';
            .company-info{
                margin-bottom: 20px;
                font: bold 18px/1 'apple';
            }
            .company-name{
                margin-bottom: 5px;
                span{
                    &:nth-of-type(1){
                        &::after{
                            content: '|';
                            margin: 0px 5px;
                        }
                    }
                    &:nth-of-type(2){
                        &::after{
                            content: '|';
                            margin: 0px 5px;
                        }
                    }
                }
            }
            .company-report{
                margin-bottom: 5px;
            }
            .company-number{
                margin-bottom: 5px;
            }
            .company-responsible{
                margin-bottom: 10px;
            }
            .company-copyright{
                font:  12px/1 'apple';
            }
        }

	}
`;

const Footer = () => {
	return (
		<FooterBlock>
			<div className='footer-inner-box flex-center'>
				<section className='cs-center-inner-box'>
					<article className='cs-center-text'>
						<span> C/S CENTER</span>
					</article>
					<article className='cs-center-number'>
						<span>070.8583.0030</span>
					</article>
					<article className='cs-time-text'>
						<span>평일 AM 10:00 - PM 05:00</span>
						<span>점심 PM 12:00 - PM 01:00</span>
					</article>
					<article className='cs-closed-date'>
						<span>토,일,국가공휴일 휴무</span>
					</article>
				</section>
				<section className='company-inner-box'>
					<article className='company-info'>
						<span>COMPANY INFO</span>
					</article>
					<article className='company-name'>
						<span>상호 : (주)프로젝트스</span>
						<span>대표 : HONG GIL DONG</span>
						<span>사업자등록번호 : 000-00-00000</span>
					</article>
					<article className='company-report'>
                        <span>통신판매업 신고 : 2022-서울강서-00000 [사업자정보확인]</span>
                    </article>
					<article className='company-number'>
                        <span>전화 : 070-0000-0000</span>
                        <span>주소 : 서울특별시 강서구 화곡동 94-02 샵빌딩 </span>
                    </article>
					<article className='company-responsible'>개인정보관리책임자 : HONG GIL DONG(HONGGD@NAVER.COM)</article>
					<article className='company-copyright'>COPYRIGHT ⓒ 2022(주)프로젝트스 ALL RIGHTS RESERVED</article>
				</section>
			</div>
		</FooterBlock>
	);
};

export default Footer;
