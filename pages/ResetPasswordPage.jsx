import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SubmitButton from '../components/Commun/Buttons/SubmitButton';
import passwordIcon from '../public/assets/iconsLogin/pass.svg';
import eyeC from '../public/assets/iconsLogin/eyeC.svg';
import eyeO from '../public/assets/iconsLogin/eyeO.svg';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [language, setLanguage] = useState('en');
  const router = useRouter();
  const { t } = useTranslation('ResetPass'); 


  

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  

  const handleSendVerificationEmail = (e) => {
    e.preventDefault();
    console.log('Verification email sent to:', email);
    router.push('/');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
  };

  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className="content-container bg-white p-8 shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
        <p className="text-gray-600 mb-6"> {t('instructions')}</p>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <div className="input-with-icon">
              <Image src={passwordIcon} width={20} height={20} alt="password icon" className="icon" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder={t('passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
              <Image
                src={eyeC}
                width={20}
                height={20}
                alt="visibility icon closed"
                className={`visibility-icon ${!passwordVisible ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
              />
              <Image
                src={eyeO}
                width={20}
                height={20}
                alt="visibility icon open"
                className={`visibility-icon ${passwordVisible ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-with-icon">
              <Image src={passwordIcon} width={20} height={20} alt="password icon" className="icon" />
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                placeholder={t('confirmPasswordPlaceholder')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                aria-label="Confirm Password"
              />
              <Image
                src={eyeC}
                width={20}
                height={20}
                alt="visibility icon closed"
                className={`visibility-icon ${!confirmPasswordVisible ? 'visible' : ''}`}
                onClick={toggleConfirmPasswordVisibility}
              />
              <Image
                src={eyeO}
                width={20}
                height={20}
                alt="visibility icon open"
                className={`visibility-icon ${confirmPasswordVisible ? 'visible' : ''}`}
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </div>
          <SubmitButton onClick={handleFormSubmit}>{t('submitButton')}</SubmitButton>
        </form>
      </div>
    </div>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['ResetPass'])), 
    },
  };
}
export default ResetPasswordPage;

