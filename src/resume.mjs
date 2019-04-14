export function return_latex_string() { 
    return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Developer CV
% LaTeX Template
% Version 1.0 (28/1/19)
%
% This template originates from:
% http://www.LaTeXTemplates.com
%
% Authors:
% Jan Vorisek (jan@vorisek.me)
% Based on a template by Jan Küster (info@jankuester.com)
% Modified for LaTeX Templates by Vel (vel@LaTeXTemplates.com)
%
% License:
% The MIT License (see included LICENSE file)
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%----------------------------------------------------------------------------------------
%	PACKAGES AND OTHER DOCUMENT CONFIGURATIONS
%----------------------------------------------------------------------------------------

\documentclass[9pt]{developercv} % Default font size, values from 8-12pt are recommended

%----------------------------------------------------------------------------------------

\begin{document}

%----------------------------------------------------------------------------------------
%	TITLE AND CONTACT INFORMATION
%----------------------------------------------------------------------------------------

\begin{minipage}[t]{0.45\textwidth} % 45% of the page width for name
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	
	% If your name is very short, use just one of the lines below
	% If your name is very long, reduce the font size or make the minipage wider and reduce the others proportionately
	\colorbox{black}{{\HUGE\textcolor{white}{\textbf{\MakeUppercase{Skyler}}}}} % First name
	
	\colorbox{black}{{\HUGE\textcolor{white}{\textbf{\MakeUppercase{Moore-Firkins}}}}} % Last name
	
	\vspace{6pt}
	
	{\huge Software Engineer} % Career or current job title
\end{minipage}
\begin{minipage}[t]{0.275\textwidth} % 27.5% of the page width for the first row of icons
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	
	% The first parameter is the FontAwesome icon name, the second is the box size and the third is the text
	% Other icons can be found by referring to fontawesome.pdf (supplied with the template) and using the word after \fa in the command for the icon you want
	\icon{MapMarker}{12}{Louisville, KY}\
	\icon{Phone}{12}{+1 502 494 1815}\
	\icon{At}{12}{\href{mailto:brehon1104@gmail.com}{brehon1104@gmail.com}}\	
\end{minipage}
\begin{minipage}[t]{0.275\textwidth} % 27.5% of the page width for the second row of icons
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	
	% The first parameter is the FontAwesome icon name, the second is the box size and the third is the text
	% Other icons can be found by referring to fontawesome.pdf (supplied with the template) and using the word after \fa in the command for the icon you want
	\icon{Globe}{12}{\href{https://alyx.vance.me}{alyx.vance.me}}\
	\icon{Github}{12}{\href{https://github.com/alyxvance}{github.com/skyferthesly}}\
	\icon{Twitter}{12}{\href{https://twitter.com/@alyxvance}{@alyxvance}}\
\end{minipage}

\vspace{0.5cm}

%----------------------------------------------------------------------------------------
%	INTRODUCTION, SKILLS AND TECHNOLOGIES
%----------------------------------------------------------------------------------------

\cvsect{Who Am I?}

\begin{minipage}[t]{0.4\textwidth} % 40% of the page width for the introduction text
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	
	I am a software engineer dipping my feet into directing. My responsibilities are researching and architecting new solutions, implementing them, establishing standards, training my team, and directing the show.\ % Dummy text
\end{minipage}
\hfill % Whitespace between
\begin{minipage}[t]{0.5\textwidth} % 50% of the page for the skills bar chart
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	\begin{barchart}{5.5}
		\baritem{Python}{80}
		\baritem{Scala}{60}
		\baritem{Javascript}{40}
	\end{barchart}
\end{minipage}

\begin{center}
	\bubbles{5/git, 6/Linux, 4/Mac, 7/Windows}
\end{center}

%----------------------------------------------------------------------------------------
%	EXPERIENCE
%----------------------------------------------------------------------------------------

\cvsect{Experience}

\begin{entrylist}
	\entry
		{2/2018 -- present}
		{Software Engineer}
		{Certilytics Inc.}
		{Architect, implement, and direct software development for our web applications\ \texttt{Spark}\slashsep\texttt{Hive}\slashsep\texttt{React}}
	\entry
		{6/2015 -- 12/2017}
		{Software Engineer}
		{Eagle 6 Inc}
		{Started as QA, worked my way up to software engineer. We built a python flask webservice over top a Neo4j graph database to model software infrastructure identify risk associated with introducing change.\ \texttt{Python}\slashsep\texttt{Neo4j}\slashsep\texttt{Apache Camel}\slashsep\texttt{Linux}}
	\entry
		{2/2015 -- 6/2015}
		{Data QA Analyst}
		{The Rawlings Group}
		{SQA and data mining analyst on an Agile development team responsible for integrating client databases and software solutions for data mining healthcare insurance claims.\ \texttt{SQL}\slashsep\texttt{asda}}
	\entry
		{4/2014 -- 12/2014}
		{Software Quality Assurance}
		{Vantiv/HDI}
		{Automate manual QA processes using BI tools in the credit card processing industry\ \texttt{VBScript}\slashsep\texttt{asdsada}}
	\entry
		{1/2012 -- 4/2013}
		{Software Quality Assurance}
		{KFC IT}
		{lots of cool stuff\ \texttt{Powershell}\slashsep\texttt{Hardware testing}\slashsep\texttt{VBScript}}
\end{entrylist}

%----------------------------------------------------------------------------------------
%	EDUCATION
%----------------------------------------------------------------------------------------

\cvsect{Education}

\begin{entrylist}
	\entry
		{2010 -- 2013\footnotesize{full time}}
		{Bachelor of Computer Science/Computer Engineering}
		{University of Louisville}
		{Senior level credit hours obtained, paused on taking part time classes}
\end{entrylist}

%----------------------------------------------------------------------------------------
%	ADDITIONAL INFORMATION
%----------------------------------------------------------------------------------------
\begin{minipage}[t]{0.6\textwidth} 
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	
	\cvsect{dev}
	
	Wrote a fully functional Solidity Battleship game Smart Contract (executes on Ethereum Virtual Machine) supporting player profiles and multiple game sessions. All logic and data store happens on the blockchain. You can build a frontend UI over the smart contract using a Javascript library called web3.js. You can check this out on my github.\ % Dummy text
\end{minipage}


\begin{minipage}[t]{0.3\textwidth}
	\vspace{-\baselineskip} % Required for vertically aligning minipages

	\cvsect{Person}
	
	\textbf{English} - native\
	\textbf{German} - proficient\
	\textbf{Polish} - rudimentary
\end{minipage}
\hfill
\begin{minipage}[t]{0.3\textwidth}
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	
	\cvsect{Hobbies}
	
	I love... \lorem
\end{minipage}
\hfill
\begin{minipage}[t]{0.3\textwidth}
	\vspace{-\baselineskip} % Required for vertically aligning minipages
	
	\cvsect{Personal Dev}
	
	Wrote a fully functional Solidity Battleship game Smart Contract (executes on Ethereum Virtual Machine) supporting player profiles and multiple game sessions. All logic and data store happens on the blockchain. You can build a frontend UI over the smart contract using a Javascript library called web3.js. You can check this out on my github.
\end{minipage}

%----------------------------------------------------------------------------------------

\end{document}`
}