import { useTranslation } from 'react-i18next';

const PageLoader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <div className="flex items-center gap-3 font-mono text-sm text-gray-500 dark:text-gray-400">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
        <span>{t('common.loading')}</span>
      </div>
    </div>
  );
};

export default PageLoader;
