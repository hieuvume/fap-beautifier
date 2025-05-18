import { useState } from 'react';
import { useFapData, useFapDataCustom } from '@/app/providers/fap-data-provider';
import { NewsItem, PaginationItem } from './types';
import axios from 'axios';

export const useNews = () => {
  const [loading, setLoading] = useState(false);
  const { setData } = useFapData();

  const {
    newsItems,
    pagination,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
  } = useFapDataCustom({
    newsItems: (original) => {
      if (!original) return [];
      const list = original?.querySelector(
        '#ctl00_mainContent_divContent ul'
      ) as HTMLUListElement;
      const newsItems: NewsItem[] = [];

      if (list) {
        for (let i = 0; i < list.children.length; i++) {
          const item = list.children[i] as HTMLLIElement;
          const aTag = item?.querySelector('a') as HTMLAnchorElement;
          if (aTag) {
            const id = aTag?.href.split('=')[1];
            const rawText = aTag?.innerText;
            const [date, time, ...rest] = rawText?.split(' ');
            const title = rest.slice(1).join(' ');
            const dateTime = `${date} ${time}`;
            newsItems.push({
              id,
              title,
              dateTime,
            });
          }
        }
      }
      return newsItems;
    },
    pagination: (original) => {
      const list: PaginationItem[] = [];
      if (!original) return list;
      const pagination = original?.querySelector(
        '#ctl00_mainContent_pg'
      ) as HTMLUListElement;
      if (pagination) {
        for (let i = 0; i < pagination.children.length; i++) {
          const item = pagination.children[i] as HTMLLIElement;
          const text = item?.innerText;
          const aTag = item?.querySelector('a') as HTMLAnchorElement;
          const href = aTag?.href;
          const match = href?.match(/'(\d+)'/);
          const page = match ? parseInt(match[1]) : 0;
          const active = item?.children[0]?.classList?.contains('active');
          const disabled =
            item?.children[0]?.attributes?.getNamedItem('disabled') !== null;
          list.push({
            text,
            page,
            active,
            disabled,
          });
        }
      }
      return list;
    },
    viewStateValue: (original) => {
      const viewState = original?.querySelector(
        '#__VIEWSTATE'
      ) as HTMLInputElement;
      return viewState ? viewState.value : '';
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector(
        '#__VIEWSTATEGENERATOR'
      ) as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : '';
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector(
        '#__EVENTVALIDATION'
      ) as HTMLInputElement;
      return eventValidation ? eventValidation.value : '';
    },
  });

  const onChangePage = async (page: number) => {
    setLoading(true);
    try {
      const currentPage =
        pagination.find((item) => item.active)?.page ?? page - 1;
      const formData = {
        __EVENTTARGET: 'ctl00$mainContent$pg',
        __VIEWSTATE: viewStateValue,
        __VIEWSTATEGENERATOR: viewStateGeneratorValue,
        __EVENTVALIDATION: eventValidationValue,
        __EVENTARGUMENT: page,
        'ctl00$mainContent$pg_input': currentPage,
      };

      const response = await axios.post('', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(response.data, 'text/html');
      const container = htmlDoc.querySelector('.container') as Element;
      setData(container);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error changing page:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    newsItems,
    pagination,
    loading,
    onChangePage
  };
}; 