import { useDescribeDemoQuery } from '@/graphql';
import { computed } from 'vue';

export function useDemo() {
    const { result } = useDescribeDemoQuery({
        region: 'ksyun',
    });
    return computed(() => {
        return result.value?.DescribeDemo.DemoItemSet;
    });
}
