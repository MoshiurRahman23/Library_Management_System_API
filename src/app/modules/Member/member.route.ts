import express from 'express';
import { MemberController } from './member.controller';
import validateRequest from '../../middleware/validateRequest';
import { MemberValidationSchema } from './member.validation';


const router = express.Router();

router.post('/', MemberController.createMember)

router.get('/', MemberController.getAllMemberFromBD)

router.get('/:id', MemberController.getMemberByIdFromBD)

router.put('/:id',
    validateRequest(MemberValidationSchema.updates),
    MemberController.updateIntoDB
)

router.delete('/:id', MemberController.deletedMemberFromDB)


export const MemberRoutes = router;