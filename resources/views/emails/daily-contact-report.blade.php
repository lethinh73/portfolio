<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Contact Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e9ecef;
        }
        .header h1 {
            color: #333;
            margin: 0;
        }
        .summary {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 25px;
        }
        .contact-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .contact-table th,
        .contact-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        .contact-table th {
            background-color: #f8f9fa;
            font-weight: bold;
            color: #495057;
        }
        .contact-table tr:hover {
            background-color: #f8f9fa;
        }
        .message-cell {
            max-width: 300px;
            word-wrap: break-word;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            font-size: 14px;
            color: #6c757d;
            text-align: center;
        }
        .attachment-note {
            background-color: #e7f3ff;
            border-left: 4px solid #007bff;
            padding: 15px;
            margin-top: 20px;
            border-radius: 0 5px 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Daily Contact Form Report</h1>
            <p>{{ now()->format('l, F j, Y') }}</p>
        </div>

        <div class="summary">
            <strong>Summary:</strong> You received {{ $contacts->count() }} new contact form {{ $contacts->count() === 1 ? 'message' : 'messages' }} yesterday.
        </div>

        @if($contacts->count() > 0)
            <table class="contact-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Received At</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($contacts as $contact)
                        <tr>
                            <td>{{ $contact->name }}</td>
                            <td>{{ $contact->email }}</td>
                            <td class="message-cell">{{ Str::limit($contact->message, 250) }}</td>
                            <td>{{ $contact->created_at->format('g:i A') }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

            <div class="attachment-note">
                <strong>📎 Attachment:</strong> A CSV file containing all contact messages is attached to this email for your records.
            </div>
        @endif

        <div class="footer">
            <p>This is an automated daily report from your portfolio website contact form.</p>
            <p>Generated on {{ now()->format('Y-m-d H:i:s T') }}</p>
        </div>
    </div>
</body>
</html>