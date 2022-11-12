import Link from 'next/link';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const HeaderBlock = styled.header`
	.header-inner-box {
		justify-content: space-around;
		height: 60px;
		.logo-box {
			font: bold 30px/1 'apple';
			color: #815854;
			
		}
		.nav-menu-box {
			a {
				position: relative;
				margin-right: 20px;
				font: bold 20px/1 'apple';
				transition: all 0.5s;
				&::after{
					display: block;
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					width: 0% ;
					height: 4px;
					background-color: #815854;
				}
				&:hover{
				color: #815854;
				&::after{
					display: block;
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					width: 100% ;
					height: 4px;
					background-color: #815854;
					transition: all 0.5s;
				}
				}
			}
			
		}
		.login-menu-box {
			font: bold 20px/1 'apple';
			a {
				position: relative;
				margin-left: 20px;
				font: bold 20px/1 'apple';
				transition: all 0.5s;
				&::after{
					display: block;
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					width: 0% ;
					height: 4px;
					background-color: #815854;
				}
				&:hover{
				color: #815854;
				&::after{
					display: block;
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					width: 100% ;
					height: 4px;
					background-color: #815854;
					transition: all 0.5s;
				}
				}
			}
		}
	}
`;

const Header = () => {
	const menuArray = ['NEW', 'BEST', 'APPAREL', 'SHOES', 'ACC', 'OUTLET'];

	return (
		<HeaderBlock>
			<div className='header-inner-box flex-center'>
				<div className='logo-box'>
					<Link href='/'>SHOP#</Link>
				</div>
				<div className='nav-menu-box'>
					{menuArray.map((menu, index) => {
						return (
							<Link href='/' key={index}>
								{menu}
							</Link>
						);
					})}
				</div>
				<div className='login-menu-box'>
					<Link href='/'>
						<AiOutlineSearch />
					</Link>
					<Link href='/Cart'>
						<AiOutlineShoppingCart />
					</Link>
					<Link href='./Login'>LOGIN</Link>
					<Link href='./Signup'>SIGNUP</Link>
				</div>
			</div>
		</HeaderBlock>
	);
};

export default Header;

