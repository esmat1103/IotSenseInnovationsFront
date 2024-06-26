import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import emailIcon from '../public/assets/iconsLogin/mail.svg';
import passwordIcon from '../public/assets/iconsLogin/pass.svg';
import eyeC from '../public/assets/iconsLogin/eyeC.svg';
import eyeO from '../public/assets/iconsLogin/eyeO.svg';
import SubmitButton from '../components/Commun/Buttons/SubmitButton';

const HomePage = () => {
  const { t } = useTranslation('home');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Email:', inputEmail);
    console.log('Password:', inputPassword);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    router.push(router.pathname, router.asPath, { locale: newLanguage });
  };

  const handleForgotPassword = () => {
    router.push('/EmailVerificationPage');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container nunito">
      <div className="left-panel">
        <div className="left-content">
          <h1>{t('welcomeMessage')}</h1>
          <p>{t('signInMessage')}</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-container">
          <button className="language-toggle triangle-icon" onClick={toggleLanguage}>
            {language === 'en' ? (
              <>
                <span className="fi fi-gb"></span>
                <span className="ml-2 grey">English</span>
              </>
            ) : (
              <>
                <span className="fi fi-fr"></span>
                <span className="ml-2 grey">French</span>
              </>
            )}
          </button>

          <form onSubmit={handleSignIn}>
            <h1>{t('submitButton')}</h1>
            <div className="input-group">
              <div className="input-with-icon">
                <Image src={emailIcon} width={20} height={20} alt="email icon" className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder={t('emailPlaceholder')}
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  aria-label="Email"
                  className="black nunito"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-with-icon">
                <Image src={passwordIcon} width={20} height={20} alt="password icon" className="icon" />
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder={t('passwordPlaceholder')}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  aria-label="Password"
                />
                <Image
                  src={passwordVisible ? eyeO : eyeC}
                  width={20}
                  height={20}
                  alt="visibility icon"
                  className="visibility-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>

            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                {t('agreeToTerms')} <a className="mx-1" href="#">
                  {t('termsLink')}
                </a> {t('and')} <a className="mx-1" href="#">
                  {t('privacyLink')}
                </a>
              </label>
              <label>
                <input type="checkbox" />
                {t('RememberMe')}
              </label>
            </div>
            <SubmitButton onClick={handleFormSubmit}>{t('submitButton')}</SubmitButton>
            <div className="forgot-password grey">
              <span onClick={handleForgotPassword} style={{ cursor: 'pointer' }}>
                {t('forgotPassword')}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}
