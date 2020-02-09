import * as React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import classnames from 'classnames';
import styles from './PrimaryLayout.scss';

interface IPrimaryLayout {
	children: React.ReactNode;
	styleClasses?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = props => {
	const { children, styleClasses } = props;

	return (
		<ErrorBoundary>
			<a
				href={'#main-content'}
				className={styles.skipNavigation}
			>
				Skip to main content
			</a>

			<header className={styles.header}>
				<h1>To Fill The Air</h1>
			</header>

			<main
				id={'main-content'}
				className={classnames(
					styles.main,
					{[`${styleClasses}`] : styleClasses}
				)}
			>
				{children}
			</main>

			<footer className={styles.footer}>
				blah blah blah
			</footer>
		</ErrorBoundary>
	);
};

export default PrimaryLayout;
