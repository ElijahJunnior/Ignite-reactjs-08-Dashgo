import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Siderbar } from '../components/Sidebar';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2121-05-3T00:00:00.000',
            '2121-05-7T00:00:00.000',
            '2121-05-18T00:00:00.000',
            '2121-05-21T00:00:00.000',
            '2121-05-27T00:00:00.000',
            '2121-05-29T00:00:00.000',
            '2121-05-30T00:00:00.000',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}
const series = [
    { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]

export default function Dashboard() {
    return (
        <Flex direction='column' h='100vh'>
            <Header />
            <Flex w='100%' my='6' maxWidth='1480px' mx='auto' px='6'>
                <Siderbar />
                <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
                    <Box p='8' pb='4' bg='gray.800' borderRadius={8}>
                        <Text fontSize='lg' mb='4'>Inscritos da Semana</Text>
                        <Chart options={options} series={series} type='area' height='160px' />
                    </Box>
                    <Box p='8' pb='4' bg='gray.800' borderRadius={8}>
                        <Text fontSize='lg' mb='4'>Taxa de Abertura</Text>
                        <Chart options={options} series={series} type='area' height='160px' />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}