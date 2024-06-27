// pages/EmailVerificationPage.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import emailIcon from '../public/assets/iconsLogin/mail.svg';
import SubmitButton from '../components/Commun/Buttons/SubmitButton';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const EmailVerificationPage = () => {
  const { t } = useTranslation('EmailVerif'); 
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleSendVerificationEmail = (e) => {
    e.preventDefault();
    console.log('Verification email sent to:', email);
    router.push('/reset-password');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className="content-container bg-white p-8 shadow-md max-w-md">
        <h1 className="text-2xl  sidebargrey font-bold mb-4">{t('title')}</h1>
        <p className="sidebargrey mb-6">{t('description')}</p>
        <form onSubmit={handleSendVerificationEmail}>
          <div className="input-group">
            <div className="input-with-icon">
              <Image src={emailIcon} width={20} height={20} alt="email icon" className="icon" />
              <input
                type="email"
                id="email"
                placeholder={t('placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
                className="black nunito"
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
      ...(await serverSideTranslations(locale, ['EmailVerif'])), 
    },
  };
}

export default EmailVerificationPage;
