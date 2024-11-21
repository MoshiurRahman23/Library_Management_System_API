import express from 'express';
import { MemberController } from './member.controller';


const router = express.Router();

router.post('/', MemberController.createMember)

router.get('/', MemberController.getAllMemberFromBD)

router.get('/:id', MemberController.getMemberByIdFromBD)

router.put('/:id', MemberController.updateIntoDB)

router.delete('/:id', MemberController.deletedMemberFromDB)


export const MemberRoutes = router;