const obj = {
    account_name: "john_doe",
    account_id: 12345,
    initial_balance: 1000.00,
    transactions: [
        {
            transaction_id: 1,
            amount: 100.50,
            date: "2023-10-01",
            description: "Payment for services"
        },
        {
            transaction_id: 2,
            amount: -50.00,
            date: "2023-10-02",
            description: "Refund for returned item"
        },
        {
            transaction_id: 3,
            amount: 200.00,
            date: "2023-10-03",
            description: "Deposit"
        },
        {
            transaction_id: 4,
            amount: -30.75,
            date: "2023-10-04",
            description: "Withdrawal"
        },
        {
            transaction_id: 5,
            amount: 150.00,
            date: "2023-10-05",
            description: "Payment received"
        },
        {
            transaction_id: 6,
            amount: -20.00,
            date: "2023-10-06",
            description: "Service fee"
        }
    ]
}

// Obyektdəki hər bir əməliyyatı aşağıdakı formada konsola çap edin:
// 2023-10-01 tarixində 1 nömrəli əməliyyat: Payment for services (100.50 AZN)

// Obyektdəki əməliyyatların nəticəsində balansı hesablayın və konsola çap edin

// Obyektdəki müsbət əməliyyatları çap edin

// Obyektdəki mənfi əməliyyatların cəmi miqdarını çap edin